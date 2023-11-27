import { Footer } from 'flowbite-react'
import React from 'react'

const FooterAdmin = () => {
  return (
    <>
    {/* <Footer container className='fixed inset-x-0 bottom-0'>
      <div className="w-full text-center">
        <div className="container mx-auto justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            alt="Gawe.Co"
            href="#"
            name="Gawe.Co"
            src="https://img.freepik.com/free-vector/logo-design-with-repairman-tools_1308-11671.jpg?w=740&t=st=1690248029~exp=1690248629~hmac=ffe0280be1c010cfd3833d2a7a099ebbccdd41025cad55de46384cda3681f289"
          />
          <Footer.LinkGroup className='flex-col text-left sm:flex-row'>
            <Footer.Link href="#">
              About
            </Footer.Link>
            <Footer.Link href="#">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#">
              Licensing
            </Footer.Link>
            <Footer.Link href="#">
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          by="Hanif Nur™"
          href="#"
          year={2022}
        />
      </div>
    </Footer> */}
        <footer className="bg-gray-800 text-white text-center py-4 relative bottom-0">
      <div className="container mx-auto">
        <p className="mb-2">© 2023 Your Company. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy</p>
      </div>
    </footer>
    </>
  )
}

export default FooterAdmin