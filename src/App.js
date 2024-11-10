import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
// img file or font(non-js file): we have to add in extension(.png)!!
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="hi"
                handle="Issac"
                image={AlexaImage}
                description="Alexa was created by Amazon and helps you buy things."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="bye"
                handle="zizel"
                image={CortanaImage}
                description="Cortana was made by Microsoft. Who knows what it does?"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="seeya"
                handle="huam"
                image={SiriImage}
                description="Siri was made by Apple and is being phased out."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

// Props system
// 1. Pass data from a parent to a child.
// 2. Allows a parent to configure each child differently.
// 3. One way flow of data. Child can't push props back up.
// 4. Like 25% of understanding React.

// Communication with Props
// 1. Add attributes to a JSX element.
// 2. React collects the attributes and puts them in separate objects.
// 3. Props object shows up as the first argument into the child component function.
// 4. We use the props however we wish.
