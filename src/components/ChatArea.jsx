

export default function ChatArea () {

    return (
        <div className="d-flex flex-column w-80">
            {/* name container container */}
            <div className="chat-name-container border-bottom-primary p-3">
                <h2 className="text-white">Name of the friend</h2>
            </div>
            {/* name container  -- ends here*/}

            {/* Chat body container */}
            <div className="chat-message-container overflow-auto border-bottom-primary p-3">
                {/* reply message */}
                <div className="chat-message-wrapper reply">
                    
                    <div className="chatters-info-container">
                        <div className="chatters-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGIsT1WCsGPkc_2mLPTMmnUTYNt3Bk-3cfQhUJiVI&s" className="rounded-circle convoListImg" alt="Profile Photo" />
                        </div>
                    </div>
                    <div className="chatters-message-container">
                        <div className="chatters-message-wrapper">
                            <p className="chatters-message text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque dolorum amet nihil a, aliquam veritatis cumque exercitationem illo recusandae, impedit neque? Maiores cupiditate cumque molestiae perspiciatis eaque rem illo laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque dolorum amet nihil a, aliquam veritatis cumque exercitationem illo recusandae, impedit neque? Maiores cupiditate cumque molestiae perspiciatis eaque rem illo laudantium?</p>
                        </div>
                    <span className="text-white">time sent</span>
                    </div>
                </div>
                {/* reply message */}
                <div className="chat-message-wrapper sender">
                    
                    <div className="chatters-info-container">
                        <div className="chatters-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGIsT1WCsGPkc_2mLPTMmnUTYNt3Bk-3cfQhUJiVI&s" className="rounded-circle convoListImg" alt="Profile Photo" />
                        </div>
                    </div>
                    <div className="chatters-message-container">
                        <div className="chatters-message-wrapper">
                            <p className="chatters-message text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque dolorum amet nihil a, aliquam veritatis cumque exercitationem illo recusandae, impedit neque? Maiores cupiditate cumque molestiae perspiciatis eaque rem illo laudantium?</p>
                        </div>
                    <span className="text-white">time sent</span>
                    </div>
                    
                </div>
                {/* reply message */}
                <div className="chat-message-wrapper reply">
                    
                    <div className="chatters-info-container">
                        <div className="chatters-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGIsT1WCsGPkc_2mLPTMmnUTYNt3Bk-3cfQhUJiVI&s" className="rounded-circle convoListImg" alt="Profile Photo" />
                        </div>
                    </div>
                    <div className="chatters-message-container">
                        <div className="chatters-message-wrapper">
                            <p className="chatters-message text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque dolorum amet nihil a, aliquam veritatis cumque exercitationem illo recusandae, impedit neque? Maiores cupiditate cumque molestiae perspiciatis eaque rem illo laudantium?</p>
                        </div>
                    <span className="text-white">time sent</span>
                    </div>
                </div>
                
            </div>
                {/* Chat body container  -- ends here*/}

            {/* Submit container */}
            <div className="chat-submit-container border-bottom-primary p-3">
            <form className="row h-100">
                <div className="col-9">
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Message" id="floatingTextarea2" />
                        <label htmlFor="floatingTextarea2">Message</label>
                    </div>
                </div>
                <div className="col-3">
                    <button type="submit" className="btn btn-primary w-100 h-100 mx-auto">Send</button>
                </div>
                </form>
            </div>
            {/* Submit container -- ends here */}
            
        </div>
    );
}