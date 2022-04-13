import React from "react";
import training from '../../images/training.jpg';
import './Training.css';

const Training = () => {
    return(
        <div name='training' className="training">
            <div className="container training__container">
                <div className="training__image">
                    <img src={training} alt="boxer" className="training__image__img" />
                </div>
                <div className="training__text">
                    <h2 className="training__text__title">Our Way of Training</h2>
                    <div className="training__text__paragraph">
                        <p className="training__text__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="training__text__p">In est ante in nibh mauris cursus mattis molestie a. Eget dolor morbi non arcu risus quis. Ac ut consequat semper viverra nam libero. Et netus et malesuada fames ac turpis egestas integer. Pretium viverra suspendisse potenti nullam ac tortor. Egestas fringilla phasellus faucibus scelerisque. Viverra adipiscing at in tellus integer feugiat scelerisque. Et malesuada fames ac turpis egestas sed tempus urna. Nulla aliquet enim tortor at. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Dui nunc mattis enim ut tellus elementum. Dictum sit amet justo donec. Euismod elementum nisi quis eleifend quam. Non blandit massa enim nec dui nunc mattis enim ut.</p>
                        <p className="training__text__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="training__text__p">Diam sollicitudin tempor id eu nisl nunc mi ipsum. Dui faucibus in ornare quam viverra orci. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Ultricies integer quis auctor elit sed vulputate mi sit. A arcu cursus vitae congue. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Natoque penatibus et magnis dis parturient montes nascetur. Vitae suscipit tellus mauris a diam maecenas sed. Habitant morbi tristique senectus et. Ornare massa eget egestas purus viverra accumsan in. Sit amet cursus sit amet dictum. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Massa tincidunt dui ut ornare lectus sit. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Arcu cursus euismod quis viverra. Posuere urna nec tincidunt praesent semper feugiat nibh.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training;