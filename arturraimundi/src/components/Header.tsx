import profileImg from '../assets/profile.jpg' 

export default function Header() {
  return (
    <section id="header">

    <div className="card">
      <div className="img-header"> 
          <img src={profileImg} alt="Artur Raimundi" /> 
                           
        </div>
        <div className="text-header"> 
            <h1>Artur Raimundi</h1> 
             <p>
             Backend & Data Developer | Data Integration, SQL, PHP | @ComputerScience
          </p>
        </div>
      </div>
    </section>
  );
}