const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = id => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = userID => {
  return findUserById(userID).then(user => user.name);
};

describe('Exercise_2', () => {
  test('Retorne o nome do usuário', () => {
    expect.assertions(1);
    return getUserName(4).then(name => {
      expect(name).toEqual('Mark');
    });
  });
  test('Usuário não encontrado', () => {
    expect.assertions(1);
    return getUserName(8).catch(error => {
      expect(error).toEqual({
        error: 'User whith 8 not found.',
      });
    });
  });
});

describe('Exercise_3', () => {
  test('Retorne o nome do usuário', async () => {
    expect.assertions(1);
    const name = await getUserName(5);
    expect(name).toBe('Paul');
  });
  test('Usuário não encontrado', async () => {
    expect.assertions(1);
    try {
      await getUserName(8);
    } catch {
      expect(error).toEqual({
        error: 'User whith 8 not found.',
      });
    }
  });
});
