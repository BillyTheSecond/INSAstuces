  

{/* Carte de contact */ }
const ContactCard = ({first_name, last_name, role, photo_link = "", email, phone_number}) => (
    <div
        class="contact-card"
    >
        {/* si pas d'image de profil renseignée, prendre une image par défaut */}
        {/* {photo_link === "" ? photo_link = "/img/profile_pictures/default_pp.svg" : photo_link = photo_link} */}
        {/* else default picture */}
        {photo_link ? (
    <img src={photo_link} alt="Photo de profil" />
) : (
    <img src="/img/profile_pictures/default_pp.svg" alt="Photo de profil par défaut" />
)}




        {/* <img src={photo_link} alt="Photo de profil" /> */}
        <div class="contact-card-info">
            <h3>{first_name} {last_name}</h3>
            <p class="role">{role}</p>
            <a href={`mailto:${email}`}>{email}</a>
            <a href={`tel:${phone_number}`}>{phone_number}</a>
        </div>
        
    </div>


);
export default ContactCard;



