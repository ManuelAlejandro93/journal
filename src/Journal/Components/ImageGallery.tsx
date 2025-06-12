import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`
  };
}

export function ImageGallery({ photoURLS }: { photoURLS: string[] }) {
  return (
    <ImageList
      sx={{ width: '70vw', height: '60vh' }}
      variant='masonry'
      cols={5}
      rowHeight={121}
    >
      {photoURLS.map((photo, i) => (
        <ImageListItem
          key={photo + i}
          cols={1}
          rows={1}
        >
          <img
            {...srcset(photo, 121, 1, 1)}
            alt={'imagen subida por el usuario'}
            loading='lazy'
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
