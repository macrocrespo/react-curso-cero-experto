import { ImageList, ImageListItem } from '@mui/material';
import { Box } from '@mui/system';

export const ImageGallery = ({ images }) => {
  return (
    <Box sx={{ width: '100%', height: 500, overflowY: 'scroll' }}>
      <ImageList  variant="masonry" cols={4} gap={8}>
        {images.map((image) => (
          <ImageListItem key={image}>
            <img
              src={`${image}?w=248&fit=crop&auto=format`}
              srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt="Note Image"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}