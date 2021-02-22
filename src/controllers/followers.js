const idValidation = require("../middlewares/idValidation");
const Router = require("../router");

const followers = Router();

followers.get("/", async (request, response) => {
  try {
    const followers = await followerDB.findFollowers();

    return response.status(200).json(followers);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

followers.get("/:id", idValidation, async (request, response) => {
  try {
    const followers = await followerRepository.findFollowersByUserId(
      request.params.id
    );

    return response.status(200).json(followers);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

followers.post("/", async (request, response) => {
  try {
    const { userId, followerId } = request.body;

    const follower = await createFollowerService.execute({
      userId,
      followerId,
    });

    return response.status(201).json(follower);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

followers.put("/:id", idValidation, async (request, response) => {
  try {
    const { userId, followerId } = request.body;

    const follower = await updateFollowerService.execute(
      {
        userId,
        followerId,
      },
      request.params.id
    );

    return response.status(200).json(follower);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

followers.delete("/:id", idValidation, async (request, response) => {
  try {
    const follower = await followerRepository.destroy(request.params.id);

    return response.status(200).json(follower);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

module.exports = { followers };
