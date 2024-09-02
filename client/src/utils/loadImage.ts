export function loadImage(filename:string, folder: string) {
   let imageToShow = null;

   if (filename && folder) { 
           
       try {
           imageToShow = (process.env.NODE_ENV === 'production')
               ? `/serve-images/${folder}/${filename}`
               : require(`../../../server/assets/images/${folder}/${filename}`)

       } catch (error) {
           imageToShow = `${process.env.PUBLIC_URL}/images/image-not-found.png`;
       } 
   }

   return imageToShow;
}