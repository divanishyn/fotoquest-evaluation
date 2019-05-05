(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    122: function(e, t, a) {
      e.exports = a(290);
    },
    127: function(e, t, a) {},
    290: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        r = a.n(n),
        o = a(17),
        l = a.n(o),
        c = (a(127), a(25)),
        i = a(26),
        u = a(28),
        s = a(27),
        m = a(29),
        d = a(38),
        p = a(30),
        h = a(59),
        b = a(46),
        E = a(114),
        f = a.n(E),
        v = a(115),
        g = a.n(v),
        y = a(55),
        j = a.n(y),
        O = a(22),
        C = a.n(O),
        w = a(37),
        S = a.n(w),
        k = a(47),
        N = a.n(k),
        x = a(56),
        B = a.n(x),
        L = a(57),
        D = a.n(L),
        R = a(21),
        T = a.n(R),
        A = a(113),
        q = a.n(A),
        P = a(110),
        H = a.n(P),
        I = a(112),
        J = a.n(I),
        M = (function(e) {
          function t() {
            var e, a;
            Object(c.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(u.a)(
                this,
                (e = Object(s.a)(t)).call.apply(e, [this].concat(r))
              )).createSortHandler = function(e) {
                return function(t) {
                  (0, a.props.onRequestSort)(t, e);
                };
              }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.order,
                    n = t.orderBy,
                    o = t.rows;
                  return r.a.createElement(
                    H.a,
                    null,
                    r.a.createElement(
                      j.a,
                      null,
                      o.map(function(t) {
                        return r.a.createElement(
                          C.a,
                          { key: t.id, sortDirection: n === t.id && a },
                          r.a.createElement(
                            J.a,
                            { title: 'Sort', enterDelay: 300 },
                            r.a.createElement(
                              q.a,
                              {
                                active: n === t.id,
                                direction: a,
                                onClick: e.createSortHandler(t.id)
                              },
                              t.label
                            )
                          )
                        );
                      }),
                      r.a.createElement(C.a, null)
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.a.PureComponent);
      function W(e, t, a) {
        return t[a] < e[a] ? -1 : t[a] > e[a] ? 1 : 0;
      }
      var z = [
          { id: 'id', numeric: !0, label: 'ID' },
          { id: 'timestamp', numeric: !1, label: 'Date' },
          { id: 'location.lon', numeric: !1, label: 'Coordinates' },
          {
            id: 'landobservations[0].landcover',
            numeric: !1,
            label: 'Landcover'
          },
          { id: 'landuse', numeric: !1, label: 'Landuse' }
        ],
        F = (function(e) {
          function t() {
            var e, a;
            Object(c.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(u.a)(
                this,
                (e = Object(s.a)(t)).call.apply(e, [this].concat(r))
              )).state = { order: 'asc', orderBy: 'id' }),
              (a.handleRequestSort = function(e, t) {
                var n = t,
                  r = a.state,
                  o = r.orderBy,
                  l = r.order,
                  c = 'desc';
                o === t && 'desc' === l && (c = 'asc'),
                  a.setState({ order: c, orderBy: n });
              }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    a = e.data,
                    n = this.state,
                    o = n.order,
                    l = n.orderBy;
                  return r.a.createElement(
                    'div',
                    null,
                    r.a.createElement(
                      B.a,
                      { position: 'static', color: 'primary' },
                      r.a.createElement(
                        D.a,
                        null,
                        r.a.createElement(
                          T.a,
                          { variant: 'h5', color: 'inherit' },
                          'Contributions to evaluate'
                        )
                      )
                    ),
                    r.a.createElement(
                      S.a,
                      { className: t.paper },
                      r.a.createElement(
                        f.a,
                        { className: t.table },
                        r.a.createElement(M, {
                          order: o,
                          orderBy: l,
                          onRequestSort: this.handleRequestSort,
                          rowCount: a.length,
                          rows: z
                        }),
                        r.a.createElement(
                          g.a,
                          null,
                          (function(e, t) {
                            var a = e.map(function(e, t) {
                              return [e, t];
                            });
                            return (
                              a.sort(function(e, a) {
                                var n = t(e[0], a[0]);
                                return 0 !== n ? n : e[1] - a[1];
                              }),
                              a.map(function(e) {
                                return e[0];
                              })
                            );
                          })(
                            a,
                            (function(e, t) {
                              return 'desc' === e
                                ? function(e, a) {
                                    return W(e, a, t);
                                  }
                                : function(e, a) {
                                    return -W(e, a, t);
                                  };
                            })(o, l)
                          ).map(function(e) {
                            return r.a.createElement(
                              j.a,
                              { hover: !0, tabIndex: -1, key: e.id },
                              r.a.createElement(
                                C.a,
                                { component: 'th', scope: 'row' },
                                e.id
                              ),
                              r.a.createElement(
                                C.a,
                                null,
                                new Date(e.timestamp).toLocaleString()
                              ),
                              r.a.createElement(
                                C.a,
                                null,
                                e.location.lat,
                                ' ',
                                e.location.lon
                              ),
                              r.a.createElement(
                                C.a,
                                null,
                                e.landobservations[0].landcover
                              ),
                              r.a.createElement(
                                C.a,
                                null,
                                e.landobservations[0].landuse
                              ),
                              r.a.createElement(
                                C.a,
                                null,
                                r.a.createElement(
                                  N.a,
                                  {
                                    variant: 'contained',
                                    color: 'primary',
                                    className: t.button,
                                    component: d.b,
                                    to: '/contribution/'.concat(e.id)
                                  },
                                  'Evaluate'
                                )
                              )
                            );
                          })
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.a.PureComponent),
        U = Object(b.withStyles)(function(e) {
          return {
            paper: Object(h.a)({}, e.mixins.gutters(), {
              paddingTop: 2 * e.spacing.unit,
              paddingBottom: 2 * e.spacing.unit,
              marginTop: 3 * e.spacing.unit
            }),
            table: { minWidth: 700 }
          };
        })(F),
        Z = a(36),
        G = a.n(Z),
        K = a(117),
        Q = a.n(K),
        V = a(118),
        X = a.n(V),
        Y = a(119),
        $ = a.n(Y),
        _ = a(41),
        ee = a.n(_),
        te = a(120),
        ae = a.n(te),
        ne = a(40),
        re = a.n(ne),
        oe = a(58),
        le = a.n(oe),
        ce = a(121),
        ie = a.n(ce),
        ue = (function(e) {
          function t() {
            var e, a;
            Object(c.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(u.a)(
                this,
                (e = Object(s.a)(t)).call.apply(e, [this].concat(r))
              )).state = { evaluation: 0, comment: '' }),
              (a.handleStatusChange = function(e) {
                a.setState({ evaluation: e.target.value });
              }),
              (a.handleCommentChange = function(e) {
                a.setState({ comment: e.target.value });
              }),
              (a.handleSubmit = function() {
                var e = a.state,
                  t = e.evaluation,
                  n = e.comment,
                  r = a.props.history;
                fetch('https://demo0929535.mockable.io/evaluate', {
                  method: 'POST',
                  body: JSON.stringify({ evaluation: t, comment: n })
                })
                  .then(function(e) {
                    return e.json();
                  })
                  .then(function() {
                    r.push('/');
                  });
              }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    a = e.data,
                    n = e.match,
                    o = a.find(function(e) {
                      return e.id === n.params.id;
                    }),
                    l = new Date(o.timestamp).toLocaleString();
                  return r.a.createElement(
                    'div',
                    null,
                    r.a.createElement(
                      B.a,
                      { position: 'static', color: 'primary' },
                      r.a.createElement(
                        D.a,
                        null,
                        r.a.createElement(
                          N.a,
                          { component: d.b, to: '/' },
                          r.a.createElement(
                            G.a,
                            {
                              className: t.icon,
                              style: { color: 'white', fontSize: 30 }
                            },
                            r.a.createElement('path', {
                              d:
                                'M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z'
                            })
                          )
                        ),
                        r.a.createElement(
                          T.a,
                          { variant: 'h5', color: 'inherit' },
                          'Contribution ',
                          o.id
                        )
                      )
                    ),
                    r.a.createElement(
                      S.a,
                      { className: t.paper },
                      r.a.createElement(
                        T.a,
                        { variant: 'h6', color: 'inherit' },
                        'Contribution details'
                      ),
                      r.a.createElement(
                        T.a,
                        { component: 'p' },
                        r.a.createElement('strong', null, 'Land cover:'),
                        ' ',
                        o.landobservations[0].landcover
                      ),
                      r.a.createElement(
                        T.a,
                        { component: 'p' },
                        r.a.createElement('strong', null, 'Land use:'),
                        ' ',
                        o.landobservations[0].landuse
                      ),
                      r.a.createElement(
                        T.a,
                        { component: 'p' },
                        r.a.createElement('strong', null, 'Date:'),
                        ' ',
                        l
                      ),
                      r.a.createElement(
                        'div',
                        { className: t.photos },
                        r.a.createElement(
                          Q.a,
                          { className: t.gridList, cols: 2.5 },
                          o.photos.map(function(e) {
                            return r.a.createElement(
                              X.a,
                              { key: e.url },
                              r.a.createElement('img', {
                                src: e.url,
                                alt: e.title
                              }),
                              r.a.createElement($.a, {
                                title: e.direction.toUpperCase(),
                                classes: { root: t.titleBar, title: t.title }
                              })
                            );
                          })
                        )
                      ),
                      r.a.createElement(
                        'div',
                        { className: t.form },
                        r.a.createElement(
                          T.a,
                          { variant: 'h6', color: 'inherit' },
                          'Evaluate the quality of a contribution'
                        ),
                        r.a.createElement(
                          le.a,
                          { component: 'fieldset', className: t.formControl },
                          r.a.createElement(
                            ae.a,
                            {
                              'aria-label': 'Evaluation',
                              name: 'evaluation',
                              className: t.group,
                              onChange: this.handleStatusChange
                            },
                            r.a.createElement(re.a, {
                              value: '1',
                              control: r.a.createElement(ee.a, null),
                              label: 'Approved'
                            }),
                            r.a.createElement(re.a, {
                              value: '2',
                              control: r.a.createElement(ee.a, null),
                              label: 'Rejected because of photos'
                            }),
                            r.a.createElement(re.a, {
                              value: '3',
                              control: r.a.createElement(ee.a, null),
                              label: 'Rejected because of classifications'
                            }),
                            r.a.createElement(re.a, {
                              value: '4',
                              control: r.a.createElement(ee.a, null),
                              label: 'Rejected because of location'
                            }),
                            r.a.createElement(re.a, {
                              value: '9',
                              control: r.a.createElement(ee.a, null),
                              label: 'Rejected'
                            })
                          )
                        ),
                        r.a.createElement(
                          le.a,
                          { component: 'fieldset', className: t.formControl },
                          r.a.createElement(ie.a, {
                            id: 'comment',
                            label: 'Comment',
                            multiline: !0,
                            rowsMax: '6',
                            onChange: this.handleCommentChange,
                            className: t.textField,
                            margin: 'normal'
                          }),
                          r.a.createElement(
                            N.a,
                            {
                              variant: 'contained',
                              color: 'primary',
                              className: t.button,
                              onClick: this.handleSubmit
                            },
                            'Submit'
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.a.PureComponent),
        se = Object(b.withStyles)(function(e) {
          return {
            paper: Object(h.a)({}, e.mixins.gutters(), {
              paddingTop: 2 * e.spacing.unit,
              paddingBottom: 2 * e.spacing.unit,
              marginTop: 3 * e.spacing.unit
            }),
            photos: {
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              overflow: 'hidden',
              backgroundColor: e.palette.background.paper,
              marginTop: 3 * e.spacing.unit
            },
            gridList: { flexWrap: 'nowrap', transform: 'translateZ(0)' },
            title: { color: e.palette.primary.light },
            group: { margin: ''.concat(e.spacing.unit, 'px 0') },
            form: { marginTop: 10 * e.spacing.unit },
            textField: { width: 500 }
          };
        })(Object(p.d)(ue)),
        me = (function(e) {
          function t() {
            var e, a;
            Object(c.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(u.a)(
                this,
                (e = Object(s.a)(t)).call.apply(e, [this].concat(r))
              )).state = { data: [] }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this;
                  fetch('https://api.myjson.com/bins/jpfmg')
                    .then(function(e) {
                      return e.json();
                    })
                    .then(function(t) {
                      e.setState({ data: t });
                    });
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.state.data;
                  return r.a.createElement(
                    'div',
                    { className: 'App' },
                    r.a.createElement(
                      d.a,
                      null,
                      r.a.createElement(
                        'div',
                        null,
                        r.a.createElement(p.a, {
                          exact: !0,
                          path: '/',
                          render: function(t) {
                            return r.a.createElement(
                              U,
                              Object.assign({}, t, { data: e })
                            );
                          }
                        }),
                        r.a.createElement(p.a, {
                          path: '/contribution/:id',
                          render: function(t) {
                            return r.a.createElement(
                              se,
                              Object.assign({}, t, { data: e })
                            );
                          }
                        })
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.a.PureComponent);
      l.a.render(r.a.createElement(me, null), document.getElementById('root'));
    }
  },
  [[122, 1, 2]]
]);
//# sourceMappingURL=main.3a61029f.chunk.js.map
