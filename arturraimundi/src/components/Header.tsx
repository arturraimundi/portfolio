import profileImg from '../assets/profile.jpg' 

export default function Header() {
  return (
    <section id="header">
       <script
      type="module"
      src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"></script>
      <div className="img-header"> 
          <img src={profileImg} alt="Artur Raimundi" /> 
                           
        </div>
        <div className="text-header"> 
            <h1>Artur Raimundi</h1> 
             <p>
             Backend & Data Developer | Data Integration, SQL, PHP | @ComputerScience
          </p>
        </div>
    </section>
  );
}