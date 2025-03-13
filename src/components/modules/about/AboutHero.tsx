export const AboutHero = () => {
    return (
      <div className="relative h-[400px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.britannica.com/05/157305-004-53D5D212.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">We are dedicated to providing the best rental housing solutions.</p>
        </div>
      </div>
    );
  };