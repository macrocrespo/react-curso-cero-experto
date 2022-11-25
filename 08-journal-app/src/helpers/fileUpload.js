export const fileUpload = async( file ) => {
    if ( !file ) throw new Error('The file is not set.');
    const cloudUrl = 'https://api.cloudinary.com/v1_1/mariocrespoweb/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData,
        } );

        if ( !resp.ok ) throw new Error('An error occured when tried to upload the file.');
        const cloudResp = await resp.json();
        return cloudResp.secure_url;
    } catch (error) {
        console.log(error);
        throw new Error( error.message );
    }
}