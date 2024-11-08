// Function to display the profile picture
var profilePictureInput = document.getElementById('profilePicture');
var profileImage = document.getElementById('profileImage');
profilePictureInput.addEventListener('change', function (event) {
    var _a;
    var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            profileImage.src = reader_1.result;
            profileImage.style.display = 'block';
        };
        reader_1.readAsDataURL(file);
    }
});
// Function to generate and preview the resume
function generateResume() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // Display resume preview
    var resumeName = document.getElementById('resumeName');
    var resumeEmail = document.getElementById('resumeEmail');
    var resumeSkills = document.getElementById('resumeSkills');
    var resumeExperience = document.getElementById('resumeExperience');
    var resumeProfileImage = document.getElementById('resumeProfileImage');
    resumeName.textContent = name;
    resumeEmail.textContent = email;
    resumeSkills.textContent = skills;
    resumeExperience.textContent = experience;
    // Display profile image in the resume preview
    resumeProfileImage.src = profileImage.src;
    resumeProfileImage.style.display = 'block';
    // Show the resume preview
    var resumePreview = document.getElementById('resumePreview');
    resumePreview.style.display = 'block';
}
