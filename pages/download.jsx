import React from "react";

const download = () => {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex gap-20 justify-center">
        <div className="bg-slate-300 w-72">
          <img
            className="w-48 h-48 rounded-full mt-10 mb-10 m-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg"
          />
          <h1 className="flex justify-center">OTGONTSEREN</h1>
          <h2 className="flex justify-center">FULL STACK DEVELOPER</h2>
          <h1 className="ml-12 mt-6">CONTACT</h1>
          <h3 className="ml-12">rotgontseren@gmail.com</h3>
          <h1 className="ml-12 mt-6">SOCIAL MEDIA</h1>
          <h3 className="ml-12">TWITTER: @</h3>
          <h3 className="ml-12">FACEBOOK: @</h3>
          <h3 className="ml-12">INSTAGRAMM: @</h3>
        </div>
        <div className="bg-white">
          <h1>PROFILE</h1>
          <h3>
            Suspendisse sagittis, justo vitae auctor malesuada,
            <br />
            sem eros viverra ex, et luctus purus arcu at leo. <br />
            Sed ac quam vel libero tempus efficitur. Nullam et <br />
            massa orci. Cras rhoncus mattis congue. Duis <br />
            porttitor lobortis ligula ut malesuada. Nullam bib
          </h3>
          <h1>EDUCATION</h1>
          <h3>
            Bachelor of Arts, <br />
            Major In Communcation University of Summerville |<br />
            2009 - 2013 GPA: 3.9
          </h3>
          <h1>SKILLS</h1>
          <h3>
            +Exceptional communication and networking skills <br />
            +Successful working in a team environment, as well asindependently{" "}
            <br />
            +The ability to work under pressure and multi-task <br />
            +The ability to follow instructions and deliver quality results
          </h3>
          <h1>WORK EXPERIENCE</h1>
          <h3>
            13 Solibuss, Marketing Assistant <br />
            JUN 2019 - JAN 2020 <br />
            + Maintained and organized numerous office files <br />
            + Constantly updated the company contact and mailing lists <br />
            + Monitored ongoing marketing campaigns <br />
            + Monitored press coverage <br />
            JUN 2018 - JUN 2019 <br />
            + Handled the companys online presence regularly updated <br />
            + Companys website and various social media accounts <br />
            + Monitored ongoing marketing campaigns <br />+ Prepared
            presentations for prospective clients
          </h3>
        </div>
      </div>
    </div>
  );
};

export default download;
