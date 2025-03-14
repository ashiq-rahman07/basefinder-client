import styles from "./Banner.module.css";
const ListingBanner = ({ title, path }: { title: string; path: string }) => {

  return (
   <div className="pt-10">
     <div
      className={`${styles.banner} flex justify-center items-center`}
    >
      <div className="text-center">
        <h2 className="font-bold text-2xl leading-loose">{title}</h2>
        <p>{path}</p>
      </div>
    </div>
   </div>
  );
};

export default ListingBanner;