/* eslint-disable */
const Dai = artifacts.require('Dai')
const Link = artifacts.require('Link')
const Comp = artifacts.require('Comp')

const BN = require('bn.js')
const chai = require('chai')
const { expect } = chai
chai.use(require('chai-bn')(BN))

const truffleAssert = require('truffle-assertions')

const toWei = (number) => web3.utils.toWei(web3.utils.toBN(number), 'ether')

contract('ERC20 token test', (accounts) => {
  let dai, link, comp

  const owner = accounts[0]
  const alice = accounts[1]
  const bob = accounts[2]

  // コントラクトをasyncにすると上手くいかないので、
  // before内にasyncを書く
  before(async () => {
    dai = await Dai.deployed()
    link = await Link.deployed()
    comp = await Comp.deployed()
  })

  // describeでタグ付け
  describe('Basic token test', () => {
    it('Should return token names and symbols correctly', async () => {
      expect(await dai.name()).to.equal('Dai')
      expect(await link.name()).to.equal('Chainlink')
      expect(await comp.name()).to.equal('Compound')
    })
  })

  describe('Supply and balance test', () => {
    it('Should have correct total supply', async () => {
      expect(await comp.totalSupply()).to.bignumber.equal(toWei(10 ** 4))
    })

    it('Should have correct intial balances', async () => {
      const ownerBalance = await comp.balanceOf(owner)
      const aliceBalance = await comp.balanceOf(alice)
      expect(ownerBalance).to.bignumber.equal(toWei(10 ** 4))
      expect(aliceBalance).to.bignumber.equal(toWei(0))
    })
  })

  describe('transfer() test', () => {
    it('Should revert when transfer amount > balance', async () => {
      const ownerBalance = await comp.balanceOf(owner)
      const transferAmount = ownerBalance.add(new BN(1))
      await truffleAssert.reverts(comp.transfer(alice, transferAmount))
    })

    it('Should pass when transfer amount <= balance', async () => {
      const transferAmount = new BN(1000)
      await truffleAssert.passes(comp.transfer(alice, transferAmount))
    })

    it('Should update balances accordingly', async () => {
      const ownerBalance = await comp.balanceOf(owner)
      const aliceBalance = await comp.balanceOf(alice)
      const totalSupply = await comp.totalSupply()
      const thousand = new BN(1000)
      expect(ownerBalance).to.be.bignumber.equal(totalSupply.sub(thousand))
      expect(aliceBalance).to.be.bignumber.equal(thousand)
    })
  })

  describe('transferFrom() test', () => {
    before(async () => {
      const approveAmount = new BN(500)
      await comp.approve(bob, approveAmount, { from: alice })
    })

    it('Should revert when transfer amount > allowance', async () => {
      const transferAmount = new BN(501)
      await truffleAssert.reverts(
        comp.transferFrom(alice, bob, transferAmount, { from: bob })
      )
    })

    it('Should pass when transfer amount <= allowance', async () => {
      const approvedAmount = await comp.allowance(alice, bob)
      await truffleAssert.passes(
        comp.transferFrom(alice, bob, approvedAmount, { from: bob })
      )
    })
  })
})
