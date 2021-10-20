export function emailAction(newEmail) {
  return {
    type: 'NEW_EMAIL',
    newEmail,
  };
}

export function lalalaTemporario(texto) {
  return {
    type: 'TEMP',
    texto,
  };
}
