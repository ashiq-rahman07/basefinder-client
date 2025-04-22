import styles from './Banner.module.css';
const ListingBanner = ({ title, path }: { title: string; path: string }) => {
  return (
    <div className="relative">
      <div className={`${styles.banner} flex justify-center items-center `}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="text-center z-10 relative">
          <h2 className="font-bold text-2xl text-white leading-loose">
            {title}
          </h2>
          <p className="text-white ">{path}</p>
        </div>
      </div>
    </div>
  );
};

export default ListingBanner;
