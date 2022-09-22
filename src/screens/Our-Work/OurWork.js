import { MainWrapper } from './ourWork.styles';
import Testimony from '../../components/Testimony/Testimony';

const OurWork = () => {
  return (
    <MainWrapper className="container">
      <h4>Testimonies</h4>
      <Testimony
        userTestimony="I was trying to study abroad three years ago, but unsuccessfully.
        That is when I met Mishma though my cousin. I went to her, and I asked her if she could
        help me apply for an university where she is, and she accepted to help me. One month after,
        we started the application and paper. It was challenging for me and for her given the
        situation in which my country was at this time. We first started with getting me document
        like passport, pictures, etc.. After, I got my passport, we applied for an English program
        at the University of Utah. Two weeks after, we received a letter that said that I got
        accepted by to the program. My family and I were super happy. After that, we had
        scheduled an appointment with the US embassy for September, but because of the
        situation of the country, my appointment was reported for December. I was very stress
        because I was worried that the situation of the country would have affected my chance
        to get my visa. Notwithstanding of the situation of the country, I stayed positive.
        In December, I received my student visa. I was very happy. Two weeks later, I flew to
        Idaho where I met Mishma. My number one concern at this time was to find a place where to
        live. Mishma with her contact found me an host family which today has become my family in the US.
        A year later, after I got transferred to BYUI, Mishma secretly opened a gofunme for me which
        helped me get started as a college student. Today, I am studying Business Operations, but want
        to change my major to Software Engineer."
        author="Keith Dana Pierre-Louis"
      />

      <Testimony
        userTestimony="I met Mishma a year ago through a friend. My friend Kim introduced me to her
        and asked if she could help me as I was applying for school. After getting the school admission,
        I was super worried that I was not going to have a visa since I had no idea on how to go about it.
        Fortunately I had Mishma who helped me with the application and helped me prepare for the visa
        interviews. I was approved for the visa and that was the happiest moment of my life though I was
        still worried about one thing. Despite me having a visa that would allow me to arrive in the United
        States, I still did not have money to go to school. However, guess what? My friends Kim and Mishma
        helped me raise money through Gofundme. It’s been a long journey, full of ups and downs, but I am
        so excited to tell you all that we made it and I am finally in the United States,  starting school
        next week."
        author="Divine Irakoze"
      />

      <Testimony
        userTestimony="Mon expérience avec ... a été très satisfaisante. En ce qui concerne, le processus
        d'admission et d'intégration à l'université, elle m'a aidée à trouver une université disponible
        où il y avait une session en cours d'ouverture. En outre, elle m'a accompagnée dans toutes les
        démarches administratives liées aux inscriptions, l'admission à l'université et les procédures
        de demande visa. Concernant ce dernier, elle m'a aidé à remplir le formulaire de demande de visa
        et la collecte des documents. Puis, elle avait planifié elle-même mon rendez-vous à l'Ambassade. 
        En fait, C'était une très bonne expérience, j'apprécie son dévouement et sa rigueur dans
        l'accompagnement  de mon admission à l'université l'année dernière ( 2021).
        "
        author="Marie Dayana"
      />

    </MainWrapper>
  );
};

export default OurWork;
