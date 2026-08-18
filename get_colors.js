import getColors from 'get-image-colors';

async function extractColors() {
    try {
        const colors = await getColors('/Users/nitish/grace-nursing-hub-43/public/lovable-uploads/5c067fa4-0b27-4771-884a-a041dfdd3aa0.png');
        console.log(colors.map(color => color.hex()));
    } catch (e) {
        console.error(e);
    }
}
extractColors();
