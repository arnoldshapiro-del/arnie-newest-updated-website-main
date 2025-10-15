import doctorImage from "@/assets/doctor-profile-new.jpg";

const DoctorIntroSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <img
              src={doctorImage}
              alt="Dr. Arnold G. Shapiro"
              className="w-64 h-auto rounded-2xl shadow-large"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-2">
              Arnold G. Shapiro MD
            </h2>
            <p className="text-xl text-primary font-semibold">
              Board Certified Psychiatrist
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorIntroSection;
