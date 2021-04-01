import React from 'react'
import './style.css'

function PrivacyPage(){
    return(
        <div className='container privacy-container' >
            <div className="title" >
                <h2>Privacy Policy</h2>
                <span>&nbsp;</span>
            </div>
            <p>This privacy policy is given on the behalf of our application - Learn-E, so that the people we serve know that how their use is being regulated on the page with full privacy. Please go through our given privacy policy, so that you get a clear understanding of how we work backstage while you use the application.</p>
            <h4>What personal information do we collect from the people visiting our application?</h4>
            <p>To use the application, the students are allowed to log in using the login credentials provided to them from their school, so no signup is required. In this case, no private information is given to the application and hence we don't store any information about the user apart from the username and password.</p>
            <h4>How is our website/application protected?</h4>
            <p>Both our app and website are reviewed on a daily basis so that there are no security or vulnerability issues, thus it makes our website extremely safe to visit. It is just the access to us and your school, so that means that no other third party is involved, meaning extra protection.</p>
            <h4>Do we use cookies?</h4>
            <p>Cookies are files that the service provider transmits into your device with the help of the web browser. It helps capture relevant information for further use in the future. So cookies help us to provide you with better and improvised services</p>
            <h4>Is a third party interacting with the application?</h4>
            <p>There is two third party services - Vimeo and Youtube - that will be interacting with our application, to facilitate of playing video lectures. The rest is our own application.</p>
            <h4>Transfer of personal information.</h4>
            <p>No personal information is going to be transferred to any other party. It is because we don't store any information about the user using the application, hence the privacy is kept up to date</p>
        </div>
    )
}

export default PrivacyPage;
