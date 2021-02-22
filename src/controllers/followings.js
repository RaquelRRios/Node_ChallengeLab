const idValidation = require("../middlewares/idValidation");
const Router = require("../router");

const followings = Router();

followings.get("/", async (request, response) => {
  try {
    const followings = await followingDB.findFollowings();

    return response.status(200).json(followings);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

followings.get("/:id", idValidation, async (request, response) => {
  try {
    const followings = await followingDB.findFollowingsByUserId(
      request.params.id
    );

    return response.status(200).json(followings);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

followings.post("/", async (request, response) => {
  try {
    const { userId, followingId } = request.body;

    const following = await createFollowingService.execute({
      userId,
      followingId,
    });

    return response.status(201).json(following);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

followings.put("/:id", idValidation, async (request, response) => {
  try {
    const { userId, followingId } = request.body;

    const following = await updateFollowingService.execute(
      {
        userId,
        followingId,
      },
      request.params.id
    );

    return response.status(200).json(following);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

followings.delete("/:id", idValidation, async (request, response) => {
  try {
    const following = await followingDB.destroy(request.params.id);

    return response.status(200).json(following);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

module.exports = { followings };
