const About = {
  async render() {
    return `
        <div>
      <div class="title-wrapper py-4 mx-0">
      <h1 class="text-center fw-bold display-4 my-3">About Page</h1>
  
      <div class="container text-center mb-3">
          <a href="#/about" class="btn category rounded-pill">Overview</a>
          <a href="#/about-team" class="btn category rounded-pill" aria-current="page">Team</a>
      </div>
      </div>
  
      <div class="budgeting-wrapper container-fluid mt-5 px-5" style="width: 75%;">
      <div class="container-fluid mt-3 text-left">
      <br>
        <h2>About</h2>
        <p>Learn more about the team Growth Familie, how and why the project started.</p>
        <h2>Team</h2>
        <p>Growth Familie is managed by the C22-128 team to fulfill the Dicoding final project.</p>
        <h2>History</h2>
        <p>Tim kami memilih tema ini karena menurut kami Parenting ialah ilmu yang mempelajari tentang cara mendidik anak, mengasuh anak serta membimbing anak dengan cara yang baik dan tepat. Seperti yang telah kita ketahui bahwa, guru pertama kali dari seorang manusia adalah orang tuanya. Baik itu tentang cara anak itu berbicara, berperilaku, ataupun hal lainnya. Itu semua berawal dari lingkungan keluarga, dan yang paling berperan penting dalam lingkungan keluarga adalah seorang Ayah dan Ibu. Maka dari itu parenting sangatlah penting untuk dipelajari oleh siapapun yang akan menjadi orang tua atau bagi yang sudah menjadi orang tua.</p>
        <h2>Article Reference</h2>
          <ul>
              <li><a href="https://www.alodokter.com/">www.alodokter.com</a></li>
              <li><a href="https://hellosehat.com">hellosehat.com</a></li>
              <li><a href="https://www.halodoc.com">www.halodoc.com</a></li>
          </ul>
          <br>
      </div>
        `;
  },

  async afterRender() {
    return this.render;
  },
};

export default About;