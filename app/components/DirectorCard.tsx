import Image from 'next/image';

interface Director {
    name: string;
    title: string;
    bio: string;
    image: string;
}

const DirectorCard = ({ director }: { director: Director }) => (
    <div className="bg-card-bg p-6 rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.03] text-center border border-gold-dark/30">
        <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gold/50">
            <Image src={director.image} alt={director.name} width={400} height={500} className="w-full h-full object-cover" unoptimized />
        </div>
        <h3 className="text-xl font-heading text-gold mb-1">{director.name}</h3>
        <p className="text-sm font-body text-text-gray mb-3">{director.title}</p>
        <p className="text-sm text-text-light">{director.bio}</p>
    </div>
);

export default DirectorCard;