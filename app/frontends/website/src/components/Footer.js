import React from 'react'

const Footer = () => {
  return (
      <footer className="py-4 text-purple-300 bg-fuchsia-100">
          <div className="container flex items-center justify-between mx-auto">
              <p>Privacy Policy</p>
              <p>&copy; 2023 GoBridge</p>
              <a href="/CodeOfConduct" className="text-purple-300 " target="_blank" rel="noreferrer">
                  Code of Conduct
              </a>
      </div>
   </footer>
)};

export default Footer