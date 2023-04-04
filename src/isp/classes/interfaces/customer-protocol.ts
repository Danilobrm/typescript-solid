interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}

interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}

export {
  CustomerOrder,
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
};
