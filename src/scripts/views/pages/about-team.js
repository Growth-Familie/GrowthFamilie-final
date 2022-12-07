const about = {
  async render() {
    return `
          <div>
        <div class="title-wrapper py-4 mx-0">
        <h1 class="text-center fw-bold display-4 my-3">About Page</h1>
    
        <div class="container text-center mb-3">
            <a href="#/about" class="btn category rounded-pill">Overview</a>
            <a href="#/about/team" class="btn category rounded-pill" aria-current="page">Team</a>
        </div>
        </div>
  
        <section class="team-wrapper"> 
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center text-light">
                    <div class="section-title">
                        <h2>Our Team</h2>
                    </div>
                </div>
            </div>
  
            <div class="row">
  
                <!-- Our Team item start -->
                <div class="col-md-3 col-sm-6">
                    <div class="team-item">
                        <div class="item-image">
                            <img src="./images/fajrul.png" alt="" width="100%">
                        </div>
                        <div class="item-meta">
                            <h3 class="item-title">Muhammad Fajrul Khaq</h3>
                            <h6 class="item-position">STMIK El Rahma</h6>
                        </div>
                    </div>
                </div>
                <!-- Our Team item end -->
  
                <!-- Our Team item start -->
                <div class="col-md-3 col-sm-6">
                    <div class="team-item">
                        <div class="item-image">
                            <img src="./images/tya.png" alt="" width="100%">
                        </div>
                        <div class="item-meta">
                            <h3 class="item-title">Setyawati Putri Nugraha</h3>
                            <h6 class="item-position">STMIK Bandung</h6>
                        </div>
                    </div>
                </div>
                <!-- Our Team item end -->
  
                <!-- Our Team item start -->
                <div class="col-md-3 col-sm-6">
                    <div class="team-item">
                        <div class="item-image">
                            <img src="./images/suhaefi.png" alt="" width="100%">
                        </div>
                        <div class="item-meta">
                            <h3 class="item-title">Suhaefi Fauzian</h3>
                            <h6 class="item-position">STMIK Bandung</h6>
                        </div>
                    </div>
                </div>
                <!-- Our Team item end -->
  
                <!-- Our Team item start -->
                <div class="col-md-3 col-sm-6">
                    <div class="team-item">
                        <div class="item-image">
                            <img src="./images/taqiy.png" alt="" width="100%">
                        </div>
                        <div class="item-meta">
                            <h3 class="item-title">Taqiy Gusdi</h3>
                            <h6 class="item-position">Universitas Padjadjaran</h6>
                        </div>
                    </div>
                </div>
                <!-- Our Team item end -->
  
            </div>
        </div>
    </section>
    
  
          `;
  },

  async afterRender() {
    return this.render;
  },
};

export default about;