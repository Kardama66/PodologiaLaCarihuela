(async () => {
  const imagemin = await import('imagemin');
  const imageminMozjpeg = await import('imagemin-mozjpeg');
  const imageminPngquant = await import('imagemin-pngquant');

  await imagemin.default(['src/assets/images/*.{jpg,png}'], {
    destination: 'dist/assets/images',
    plugins: [
      imageminMozjpeg.default({ quality: 75 }),
      imageminPngquant.default({ quality: [0.6, 0.8] })
    ]
  });

  console.log('Images optimized');
})();
