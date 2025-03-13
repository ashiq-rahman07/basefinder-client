export const TeamSection = () => {
    const teamMembers = [
      {
        name: "John Doe",
        role: "CEO",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s",
      },
      {
        name: "Jane Smith",
        role: "CTO",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s",
      },
      {
        name: "Alice Johnson",
        role: "Marketing Head",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s",
      },
    ];
  
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };