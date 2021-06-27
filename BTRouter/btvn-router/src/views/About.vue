<template>
  <div class="about">
    <div class="headline">
      <div class="logo-nav">
        <div class="logo-box"></div>
        <div class="logo-brand">nu<span>ntium</span></div>
      </div>
      <div class="headline-text">
        A publishing company that focuses on the essentials.
      </div>
    </div>
    <div class="about-inner">
      <div class="about-small container-fluird">
        <div class="row">
          <div
            class="col-12 col-sm-6 col-md-6 col-lg-6"
            style="display: flex; align-items: center"
          >
            <div class="about-small-text">
              <div class="about-small-title">
                We tell stories that drives the heart.
              </div>
              <div class="about-small-content">
                Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor
                nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit
                culpa qui minim pariatur et officia elit id. Tempor cupidatat
                veniam esse ad veniam dolore excepteur tempor dolor consectetur
                ut id.
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-6 about-small-img">
            <img
              src="https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
      <!-- about-2 -->
      <div class="about-small container-fluird">
        <div class="row">
          <div class="col-12 about-small-img">
            <img
              src="https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
          </div>
          <div class="col-12">
            <div class="about-small-text">
              <div class="about-small-title">
                We tell stories that drives the heart.
              </div>
              <div class="about-small-content">
                Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor
                nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit
                culpa qui minim pariatur et officia elit id. Tempor cupidatat
                veniam esse ad veniam dolore excepteur tempor dolor consectetur
                ut id.
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end-about-2 -->
      <!-- about-3 -->
      <div class="about-small container-fluird">
        <div class="row">
          <div class="col-12">
            <div class="about-small-text" style="transform: translateX(-100px)">
              <div class="about-small-title">
                We tell stories that drives the heart.
              </div>
              <div class="about-small-content">
                Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor
                nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit
                culpa qui minim pariatur et officia elit id. Tempor cupidatat
                veniam esse ad veniam dolore excepteur tempor dolor consectetur
                ut id.
              </div>
            </div>
          </div>
          <div class="col-12 about-small-img">
            <img
              src="https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
      <!-- end-about3 -->
    </div>
    <div class="headline">
      <div class="logo-nav">
        <div class="logo-slogan">
          Because we are you.
          <div>Human.</div>
        </div>
      </div>
      <div class="headline-text pt-4" style="width: 434px">
        A publishing company that focuses on the essentials.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {};
  },
};
</script>
<style scoped>
.headline {
  width: 100%;
  height: 571px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Libre Baskerville", serif;
}
.logo-nav {
  position: relative;
  display: flex;
}
.logo-box {
  width: 94px;
  height: 78px;
  background: #1c1c1c;
}
.logo-brand {
  font-size: 42px;
  line-height: 50.08px;
  font-weight: 700;
  display: flex;
  align-items: center;
  color: #ffffff;
  transform: translateX(-60px);
}
.headline-text {
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 30px;
}
.about-inner {
  padding: 50px 60px;
  background-color: #1c1c1c;
  color: rgba(255, 255, 255, 1);
  width: 95%;
  margin: auto;
  position: relative;
}
.about-inner::before {
  width: 8px;
  height: 1016px;
  background-color: #ffffff;
  position: absolute;
  content: "";
  top: 0px;
  left: 1104px;
}
.about-inner:after {
  width: 8px;
  position: absolute;
  height: 1016px;
  background: #ffffff;
  content: "";
  bottom: 0px;
  left: 221px;
}
.about-small {
  display: flex;
  justify-content: center;
  align-items: center;
}
.about-small-text {
  text-align: left;
  width: 90%;
}
.about-small-title {
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 42px;
  line-height: 52.08px;
}
.about-small-content {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
}
.about-small-img img {
  width: 569px;
  height: 419px;
  object-fit: contain;
}
/* about2 */
.about-small:nth-child(2) {
  display: flex;
  flex-direction: column;
  transform: translateY(-100px);
}
.about-small-text {
  width: 569px;
  margin: auto;
}
/* about-3 */
.about-small:nth-child(3) {
  margin-top: 40px;
}
.about-small:nth-child(3) .about-small-img {
  display: flex;
  justify-content: flex-end;
}
.about-small:nth-child(3) .about-small-img img {
  width: 280px;
}
.about-small:nth-child(3) .about-small-img img {
  margin-left: 20px;
}
.logo-slogan:nth-child(1) {
  width: 427px;
  font-weight: 400;
  font-family: "Libre Baskerville", serif;
  font-size: 42px;
  line-height: 52.08px;
}
</style>
