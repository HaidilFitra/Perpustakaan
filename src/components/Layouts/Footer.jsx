
const Footer = () => {
  return (
    <div className="footer bg-white mt-20" id="sosial">
      <div className="container mx-auto px4 flex items-center justify-between">
        <p className="py-4 ">&copy; copyright by <span className="font-bold">LiteraLink</span> 
        </p>
        <div className="sosial-footer flex items-center sm:gap-7 gap-2">
        <i class="ri-github-fill text-2xl"></i>
        <i class="ri-instagram-fill text-2xl"></i>
        <i class="ri-linkedin-fill text-2xl"></i>
        <i class="ri-facebook-circle-fill text-2xl"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer