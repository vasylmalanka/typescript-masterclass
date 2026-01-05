function getLength (value: string | number): number {
  if (typeof value === 'string') {
    return value.length;
  }

  return value.toString().length;
}
