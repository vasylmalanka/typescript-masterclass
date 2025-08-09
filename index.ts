type FetchDataFunction = (url: string, ...queryStrings: string[]) => Promise<string[]>;

const fetchData: FetchDataFunction = async (url: string, ...queryStrings: string[]): Promise<string[]> => {
  const queryString = queryStrings.length > 0 ? `?${queryStrings.join('&')}` : '';
  const fullUrl = `${url}${queryString}`;
  const response = await fetch(fullUrl);
  const data: string[] = await response.json();

  return data;
};

fetchData('https://api.example.com', 'param1=value1', 'param2=value2');

type User = {
  firstName: string;
  lastName: string;
  age: number;
}

const user: User = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

async function getUserInfo ({ firstName, lastName, age }: User): Promise<string> {
  return `User: ${firstName} ${lastName}, Age: ${age}`;
}

getUserInfo(user);
