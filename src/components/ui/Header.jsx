import '../../styles/styles.css';

function Header() {


    return (
        <>
        <div className="profile-container">
          <div className="profile-info">
            <img 
              id="profile" 
              src="/images/profile.jpg" 
              alt="Profile Picture" 
            />
          </div>
          <div className="profile-info">
            <h1>Sam Wise Brooks</h1>
          </div>
        </div>
        </>
    )
}
export default Header;