// Function to display the profile picture
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
const profileImage = document.getElementById('profileImage') as HTMLImageElement;

profilePictureInput.addEventListener('change', (event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            profileImage.src = reader.result as string;
            profileImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// Function to generate and preview the resume
function generateResume() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Display resume preview
    const resumeName = document.getElementById('resumeName') as HTMLHeadingElement;
    const resumeEmail = document.getElementById('resumeEmail') as HTMLParagraphElement;
    const resumeSkills = document.getElementById('resumeSkills') as HTMLParagraphElement;
    const resumeExperience = document.getElementById('resumeExperience') as HTMLParagraphElement;
    const resumeProfileImage = document.getElementById('resumeProfileImage') as HTMLImageElement;

    resumeName.textContent = name;
    resumeEmail.textContent = email;
    resumeSkills.textContent = skills;
    resumeExperience.textContent = experience;

    // Display profile image in the resume preview
    resumeProfileImage.src = profileImage.src;
    resumeProfileImage.style.display = 'block';

    // Show the resume preview
    const resumePreview = document.getElementById('resumePreview') as HTMLDivElement;
    resumePreview.style.display = 'block';
}
