let count = 0
it('should fail then pass', { retries: 3 }, () => {
    count++
    expect(count).eq(2)
})
