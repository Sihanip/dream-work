import React from 'react'
import { Footer } from 'flowbite-react'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export const FooterUser = () => {

  const currentYear = new Date().getFullYear();

  return (
    <Footer className='container mx-auto mb-10 px-4 sm:px-0'>
      <div className="w-full bottom-0">
        <div className="w-full sm:flex sm:items-center sm:justify-between sm:px-4">
          <Footer.Brand
            alt="Logo"
            href="#"
            name="Gawe.Co"
            src="https://img.freepik.com/free-vector/logo-design-with-repairman-tools_1308-11671.jpg?w=740&t=st=1690248029~exp=1690248629~hmac=ffe0280be1c010cfd3833d2a7a099ebbccdd41025cad55de46384cda3681f289"
          />
          <Footer.LinkGroup className='flex flex-col sm:flex sm:flex-row'>
            <Footer.Link href="#home">
              Beranda
            </Footer.Link>
            <Footer.Link href="#findJobs">
              Cari Lowongan
            </Footer.Link>
            <Footer.Link href="#whatThere">
              Lebih Banyak
            </Footer.Link>
            <Footer.Link href="#contact">
              Ikuti Kami
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between pb-5 sm:px-4">
          <Footer.Copyright
            by="Hanif Nur F™"
            year={currentYear}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export const FooterUser2 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer className='sm:px-10 px-4 mb-10'>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            alt="Logo"
            href="#"
            name="Gawe.Co"
            src="https://img.freepik.com/free-vector/logo-design-with-repairman-tools_1308-11671.jpg?w=740&t=st=1690248029~exp=1690248629~hmac=ffe0280be1c010cfd3833d2a7a099ebbccdd41025cad55de46384cda3681f289"
          />
          <Footer.LinkGroup className='flex-col text-left sm:flex-row sm:items-center sm:justify-between'>
          <Footer.Link href="#home" className='py-1'>
              Beranda
            </Footer.Link>
            <Footer.Link href="#findJobs" className='py-1'>
              Cari Lowongan
            </Footer.Link>
            <Footer.Link href="#whatThere" className='py-1'>
              Lebih Banyak
            </Footer.Link>
            <Footer.Link href="#contact" className='py-1'>
              Ikuti Kami
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between pb-5">
          <Footer.Copyright
          className='text-left'
            by="Hanif Nur F™"
            year={currentYear}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center sm:px-4">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}