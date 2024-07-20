const {verifyUser} = require("../Middlewares/VerifyUserMiddleware");
const {addUserDetails,getUserDetails, updateUserDetails,deleteUserDetails} = require("../Controllers/UserDetailsController");
const router = require("express").Router();

router.post("/user/add-details",verifyUser,addUserDetails);
router.get("/user/get-details",verifyUser,getUserDetails);
router.put("/user/update-details",verifyUser,updateUserDetails);
router.delete("/user/:id",deleteUserDetails);

module.exports = router;