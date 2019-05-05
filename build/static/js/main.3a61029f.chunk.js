(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    122(e, t, a) {
      e.exports = a(290);
    },
    127(e, t, a) {},
    290(e, t, a) {
      a.r(t);
      const n = a(0);
      const r = a.n(n);
      const o = a(17);
      const l = a.n(o);
      const c = (a(127), a(25));
      const i = a(26);
      const u = a(28);
      const s = a(27);
      const m = a(29);
      const d = a(38);
      const p = a(30);
      const h = a(59);
      const b = a(46);
      const E = a(114);
      const f = a.n(E);
      const v = a(115);
      const g = a.n(v);
      const y = a(55);
      const j = a.n(y);
      const O = a(22);
      const C = a.n(O);
      const w = a(37);
      const S = a.n(w);
      const k = a(47);
      const N = a.n(k);
      const x = a(56);
      const B = a.n(x);
      const L = a(57);
      const D = a.n(L);
      const R = a(21);
      const T = a.n(R);
      const A = a(113);
      const q = a.n(A);
      const P = a(110);
      const H = a.n(P);
      const I = a(112);
      const J = a.n(I);
      const M = (function(e) {
        function t() {
          let e;
          let a;
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
              value() {
                const e = this;
                const t = this.props;
                const a = t.order;
                const n = t.orderBy;
                const o = t.rows;
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
      const z = [
        { id: 'id', numeric: !0, label: 'ID' },
        { id: 'timestamp', numeric: !1, label: 'Date' },
        { id: 'location.lon', numeric: !1, label: 'Coordinates' },
        {
          id: 'landobservations[0].landcover',
          numeric: !1,
          label: 'Landcover'
        },
        { id: 'landuse', numeric: !1, label: 'Landuse' }
      ];
      const F = (function(e) {
        function t() {
          let e;
          let a;
          Object(c.a)(this, t);
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            ((a = Object(u.a)(
              this,
              (e = Object(s.a)(t)).call.apply(e, [this].concat(r))
            )).state = { order: 'asc', orderBy: 'id' }),
            (a.handleRequestSort = function(e, t) {
              const n = t;
              const r = a.state;
              const o = r.orderBy;
              const l = r.order;
              let c = 'desc';
              o === t && l === 'desc' && (c = 'asc'),
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
              value() {
                const e = this.props;
                const t = e.classes;
                const a = e.data;
                const n = this.state;
                const o = n.order;
                const l = n.orderBy;
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
                          const a = e.map(function(e, t) {
                            return [e, t];
                          });
                          return (
                            a.sort(function(e, a) {
                              const n = t(e[0], a[0]);
                              return n !== 0 ? n : e[1] - a[1];
                            }),
                            a.map(function(e) {
                              return e[0];
                            })
                          );
                        })(
                          a,
                          (function(e, t) {
                            return e === 'desc'
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
      })(r.a.PureComponent);
      const U = Object(b.withStyles)(function(e) {
        return {
          paper: Object(h.a)({}, e.mixins.gutters(), {
            paddingTop: 2 * e.spacing.unit,
            paddingBottom: 2 * e.spacing.unit,
            marginTop: 3 * e.spacing.unit
          }),
          table: { minWidth: 700 }
        };
      })(F);
      const Z = a(36);
      const G = a.n(Z);
      const K = a(117);
      const Q = a.n(K);
      const V = a(118);
      const X = a.n(V);
      const Y = a(119);
      const $ = a.n(Y);
      const _ = a(41);
      const ee = a.n(_);
      const te = a(120);
      const ae = a.n(te);
      const ne = a(40);
      const re = a.n(ne);
      const oe = a(58);
      const le = a.n(oe);
      const ce = a(121);
      const ie = a.n(ce);
      const ue = (function(e) {
        function t() {
          let e;
          let a;
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
              const e = a.state;
              const t = e.evaluation;
              const n = e.comment;
              const r = a.props.history;
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
              value() {
                const e = this.props;
                const t = e.classes;
                const a = e.data;
                const n = e.match;
                const o = a.find(function(e) {
                  return e.id === n.params.id;
                });
                const l = new Date(o.timestamp).toLocaleString();
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
      })(r.a.PureComponent);
      const se = Object(b.withStyles)(function(e) {
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
      })(Object(p.d)(ue));
      const me = (function(e) {
        function t() {
          let e;
          let a;
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
              value() {
                const e = this;
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
              value() {
                const e = this.state.data;
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
                        render(t) {
                          return r.a.createElement(
                            U,
                            Object.assign({}, t, { data: e })
                          );
                        }
                      }),
                      r.a.createElement(p.a, {
                        path: '/contribution/:id',
                        render(t) {
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
// # sourceMappingURL=main.3a61029f.chunk.js.map
