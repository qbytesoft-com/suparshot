import Footer from 'components/global/footer';
import Navbar from 'components/global/navbar';
import { Button } from 'components/lib';
import { Link } from 'react-router-dom';

function Settings() {
  return (
    <>
      <Navbar />
      <div className="avoid-nav min-h-screen px-4 lg:px-0">
        <div className="my-8 w-full lg:w-1/2 mx-auto p-8 border border-gray-200">
          <h1 className="text-gray-900 font-bold text-2xl text-center mb-8">Edit Your Profile</h1>

          <form>
            <h2 className="font-bold text-gray-900 text-base mb-2">Avatar</h2>
            <div className="flex gap-4 items-center mb-4">
              <img
                src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
                alt="Maruf Ahmed"
                className="w-16 h-16 rounded-full object-cover object-center"
              />

              <Button className="py-1 px-3">
                <label htmlFor="chooseAvatar" className="text-sm">
                  Choose file
                </label>
              </Button>
              <input type="file" id="chooseAvatar" className="hidden" />
            </div>

            <div className="flex gap-4 mb-4">
              <label className="font-bold text-gray-900 text-sm w-full" htmlFor="fname">
                First name
                <input type="text" className="input-field text-base mt-2" id="fname" placeholder="First Name" />
              </label>
              <label className="font-bold text-gray-900 text-sm w-full" htmlFor="lname">
                First name
                <input type="text" className="input-field text-base mt-2" id="lname" placeholder="Last Name" />
              </label>
            </div>
            <label className="font-bold text-gray-900 text-sm" htmlFor="email">
              Email
            </label>
            <input type="email" className="input-field mt-2 mb-4" id="email" placeholder="Email Address" />
            <label className="font-bold text-gray-900 text-sm" htmlFor="sortBio">
              Short bio
            </label>
            <input type="text" className="input-field mt-2 mb-4" id="sortBio" placeholder="I'm a software engineer" />
            <label className="font-bold text-gray-900 text-sm" htmlFor="website">
              Website
            </label>
            <input type="text" className="input-field mt-2 mb-4" id="website" placeholder="https://www.example.com" />
            <label className="font-bold text-gray-900 text-sm" htmlFor="instaUsername">
              Instagram username
            </label>
            <input type="text" className="input-field mt-2 mb-4" id="instaUsername" />
            <label className="font-bold text-gray-900 text-sm" htmlFor="twitterUsername">
              Twitter username
            </label>
            <input type="text" className="input-field mt-2 mb-4" id="twitterUsername" />
            <label className="font-bold text-gray-900 text-sm" htmlFor="location">
              Location
            </label>
            <input type="text" className="input-field mt-2 mb-4" id="location" />

            <p className="text-base text-gray-900 font-bold">Password</p>
            <Link to="/reset-password" className="text-sm underline">
              Change Password
            </Link>

            <Button className="font-light block mt-8">Update Profile</Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Settings;
