import { ContentLayout, MainLayout } from '@/components/Layout';

export const Contact = () => {
  return (
    <MainLayout>
      <ContentLayout title="Contact">
        <div className="mt-24">
          <h3 className="text-2xl">Get in touch</h3>
          <p className="text-xl mt-10">
            If you have any questions or want to collaborate please don't hesitate to get in touch.
          </p>
        </div>
        <div className="mt-24">
          <h3 className="text-2xl">Details</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img />
              <p className="mt-4">Enquires</p>
              <div className="mt-6">
                <a>Client brief form</a>
              </div>
            </div>

            <div>
              <img />
              <p className="mt-4">Phone</p>
              <div className="mt-6">
                <a href="tel:+61 424 792 708">+61 424 792 708</a>
              </div>
            </div>

            <div>
              <img />
              <p className="mt-4">Email</p>
              <div className="mt-6">
                <a href="mailto:hello@matthewkinsman.com">hello@matthewkinsman.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <h3 className="text-2xl">Socials</h3>
          <div className="grid grid-cols-5"></div>
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
