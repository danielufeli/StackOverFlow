const header = document.querySelector('#header');
const headerContent = `
  <header>
    <div class="container">
      <div id="branding">
        <h1><a href="index.html" id="htext"> Stack Over Flow </a></h1>
      </div>
      <nav>
          <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="signin.html">Signin</a></li>
              <li><a href="signup.html">Signup</a></li>
            </ul>
      </nav>
    </div>
  </header>
`;

header.innerHTML = headerContent;
