enum AccessPermissions {
  None = 0,
  Read = 1,
  Write = 2,
  ReadWrite = Read + Write, // 3
  Delete = 4,
  All = ReadWrite | Delete, // 7
}

console.log(AccessPermissions.ReadWrite);
console.log(AccessPermissions.All);
