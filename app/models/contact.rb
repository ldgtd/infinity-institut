class Contact
  include ActiveModel::Validations
  include ActiveModel::Conversion

  attr_accessor :email, :name, :message

  validates_presence_of :email
  validates_presence_of :name
  validates_presence_of :message
end