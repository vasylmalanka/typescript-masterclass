type City = 'new york' | 'london' | 'tokyo';
type UppercaseCity = Uppercase<City>;
type LowercaseCity = Lowercase<UppercaseCity>;
type CapitalizeCity = Capitalize<City>;
type UncapitalizeCity = Uncapitalize<CapitalizeCity>;
