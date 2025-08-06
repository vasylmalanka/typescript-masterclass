type CustomDate = Date;
type CustomString = string;

type TrueString = CustomString extends string ? true : false;
type ConditionalNumber = CustomDate extends Date ? number : string;
type DateAssignment = CustomDate extends Date ? Date : undefined;