# encoding: utf-8

class Mailer < ActionMailer::Base

  def contact(contact)
    @contact = contact
    mail(to: 'ludovic.turmel@gmail.com', subject: "Contact Infinity Institut website", from: 'contact-no-reply@infinity-institut.ch')
  end

end