/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const {StyleSheet, css} = require('aphrodite/no-important')
const React = require('react')

class AdUnit extends React.Component {
  constructor () {
    super()
    this.state = {
      title: 'Rogue One: A Star Wars Story',
      img: 'https://image.tmdb.org/t/p/w1280/tZjVVIYXACV4IIIhXeIM59ytqwS.jpg',
      description: 'A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.',
      buttonText: 'Get Tickets',
      clickUrl: '#'
    }
  }
  render () {
    return <div className={css(styles.container)}>
      <div className={css(styles.imgContainer)}>
        <img src={this.state.img} className={css(styles.adImg)} />
        <div className={css(styles.adImgMarginFade)} />
      </div>
      <div className={css(styles.textContainer)}>
        <div className={css(styles.titleStyle)}>
          {this.state.title}
          <br />
          <p className={css(styles.descriptionStyle)}>{this.state.description}</p>
        </div>
        <div className={css(styles.buttonContainer)}>
          <a
            data-test-id={'ad-btn'}
            href={this.state.clickUrl}
            className={css(styles.button)}>
            {this.state.buttonText}
          </a>
        </div>
      </div>
    </div>
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  imgContainer: {
    position: 'relative',
    width: '100%',
    marginBottom: 70
  },
  adImg: {
    width: '100%',
    top: 0,
    bottom: 0,
    filter: 'brightness(85%)'
  },
  adImgMarginFade: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    boxShadow: '0 0 80px 8px black inset'
  },
  textContainer: {
    width: '100%',
    textAlign: 'left',
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    boxShadow: '0 -15px 75px -15px black',
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'left',
    lineHeight: '100%',
    marginBottom: 12,
    padding: 8
  },
  descriptionStyle: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'left',
    lineHeight: '130%',
    marginTop: 5,
    width: '80%',
    maxWidth: 700
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#F15500',
    color: '#FFF',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'block',
    cursor: 'pointer',
    borderRadius: 3,
    padding: 14
  }
})

module.exports = AdUnit
