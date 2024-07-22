import styles from './imageviewer.module.scss';

export const ImageViewer = ({ imageUrl }) => {
    const images = [
        {
            src: imageUrl,
            alt: 'Image',
        },
    ];

    return (
        <div className={styles.imageViewer}>
            <div className={styles.imageViewerContainer}>
                <div className={styles.imageViewerHolder}>
                    <div className={styles.imageViewerSlider}>
                        <div className={styles.imageViewerContainerWrap}>
                            {images.map((image, index) => (
                                <div className={styles.imageViewerItem} key={index}>
                                    <div className={styles.aspectRatio}>
                                        <img
                                            src={image.src}
                                            loading="lazy"
                                            width="100%"
                                            height="auto"
                                            alt={image.alt}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.imageViewerPagination}>
                {images.map((_, index) => (
                    <span
                        className={`${styles.imageViewerPaginationItem} ${
                            index === 0 ? styles.active : ''
                        }`}
                        key={index}
                    >
                        <div className={styles.aspectRatio}>
                            <img
                                src={images[index]?.src}
                                loading="lazy"
                                width="100%"
                                height="auto"
                                alt={images[index]?.alt}
                            />
                        </div>
                    </span>
                ))}
            </div>
        </div>
    );
};
