/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const {StyleSheet, css} = require('aphrodite/no-important')
const React = require('react')
const AdUnit = require('./adUnit')

class NewTabAd extends React.Component {
  render () {
    return <div className={css(styles.container)}>
      <AdUnit />
    </div>
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    margin: 0,
    background: '#4c4c4c',
    padding: 0
  }
})

module.exports = NewTabAd
